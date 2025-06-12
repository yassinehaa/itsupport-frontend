export interface Equipment {
  id: number;
  name: string;
  serialNumber: string;
  incidents: Incident[];
}

export interface Incident {
  id: number;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  createdAt: string;
  equipment: Equipment | null;
}
