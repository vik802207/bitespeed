import { Request, Response } from 'express';
import { Contact } from '../models/Contact';
import { Op } from 'sequelize';

export const identifyUser = async (req: Request, res: Response) => {
  const { email, phoneNumber } = req.body;

  const existingContacts = await Contact.findAll({
    where: {
      [Op.or]: [
      { email },
      { phoneNumber },
    ],
    },
  });

  let primaryContact = existingContacts.find(c => c.linkPrecedence === 'primary');
  
  if (!primaryContact) {
    primaryContact = await Contact.create({
      email,
      phoneNumber,
      linkPrecedence: 'primary',
    });

    return res.json({
      contact: {
        primaryContactId: primaryContact.id,
        emails: [primaryContact.email],
        phoneNumbers: [primaryContact.phoneNumber],
        secondaryContactIds: [],
      },
    });
  }

  // Create new secondary contact if needed
  const alreadyExists = existingContacts.some(
    c => c.email === email && c.phoneNumber === phoneNumber
  );

  if (!alreadyExists) {
    await Contact.create({
      email,
      phoneNumber,
      linkPrecedence: 'secondary',
      linkedId: primaryContact.id,
    });
  }

  const allLinkedContacts = await Contact.findAll({
    where: {
      [Op.or]: [
      { id: primaryContact.id },
      { linkedId: primaryContact.id },
    ],
    },
  });

  const emails = Array.from(new Set(allLinkedContacts.map(c => c.email).filter(Boolean)));
  const phoneNumbers = Array.from(new Set(allLinkedContacts.map(c => c.phoneNumber).filter(Boolean)));
  const secondaryContactIds = allLinkedContacts
    .filter(c => c.linkPrecedence === 'secondary')
    .map(c => c.id);

  return res.json({
    contact: {
      primaryContactId: primaryContact.id,
      emails,
      phoneNumbers,
      secondaryContactIds,
    },
  });
};
