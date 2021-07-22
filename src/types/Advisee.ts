import GenderChoices from 'types/GenderChoices';

export interface Advisee {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  gender: GenderChoices;
  profilePhotoUrl: string;
}

export default Advisee;
