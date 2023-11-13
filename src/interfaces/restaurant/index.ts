import { MenuInterface } from 'interfaces/menu';
import { ReservationInterface } from 'interfaces/reservation';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  maximum_capacity?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  menu?: MenuInterface[];
  reservation?: ReservationInterface[];
  table?: TableInterface[];
  user?: UserInterface[];

  _count?: {
    menu?: number;
    reservation?: number;
    table?: number;
    user?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
}
