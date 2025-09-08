export type TeamSection =
  | 'medical'
  | 'paramedical'
  | 'research'
  | 'administrative'
  | 'gallery';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  section: TeamSection;
};

