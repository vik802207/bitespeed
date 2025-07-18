// // import { Contact } from '../models/contact.model';

// type Input = {
//   email?: string;
//   phoneNumber?: string;
// };

// export const identifyUser = async ({ email, phoneNumber }: Input) => {
//   const contacts = await Contact.findAll({
//     where: {
//       $or: [
//         { email: email || null },
//         { phoneNumber: phoneNumber || null }
//       ]
//     }
//   });

//   if (!contacts.length) {
//     const newContact = await Contact.create({
//       email,
//       phoneNumber,
//       linkPrecedence: 'primary'
//     });

//     return {
//       primaryContatctId: newContact.id,
//       emails: [email],
//       phoneNumbers: [phoneNumber],
//       secondaryContactIds: []
//     };
//   }

//   let primary = contacts.find(c => c.linkPrecedence === 'primary') || contacts[0];
//   let primaryId = primary.linkedId || primary.id;

//   const all = await Contact.findAll({
//     where: {
//       $or: [{ id: primaryId }, { linkedId: primaryId }]
//     }
//   });

//   const emailExists = all.some(c => c.email === email);
//   const phoneExists = all.some(c => c.phoneNumber === phoneNumber);

//   if ((!emailExists && email) || (!phoneExists && phoneNumber)) {
//     await Contact.create({
//       email,
//       phoneNumber,
//       linkPrecedence: 'secondary',
//       linkedId: primaryId
//     });
//   }

//   const updated = await Contact.findAll({
//     where: {
//       $or: [{ id: primaryId }, { linkedId: primaryId }]
//     }
//   });

//   const primaryContact = updated.find(c => c.id === primaryId)!;

//   const emails = [...new Set(updated.map(c => c.email).filter(Boolean))];
//   const phones = [...new Set(updated.map(c => c.phoneNumber).filter(Boolean))];
//   const secondaryIds = updated.filter(c => c.linkPrecedence === 'secondary').map(c => c.id);

//   return {
//     primaryContatctId: primaryContact.id,
//     emails: [primaryContact.email!, ...emails.filter(e => e !== primaryContact.email)],
//     phoneNumbers: [primaryContact.phoneNumber!, ...phones.filter(p => p !== primaryContact.phoneNumber)],
//     secondaryContactIds: secondaryIds
//   };
// };
