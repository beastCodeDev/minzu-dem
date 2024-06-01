import { api, ApiResponseData } from '~shared/api';
import { Painting } from '../model';
import { routes } from './routes';

export const loadPaingings = () => {
  return api.get<any, ApiResponseData<Painting[]>>(routes.getPaintings());
};
