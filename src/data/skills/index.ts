import { ReactNode } from 'react';
import { content as ts } from './typescript';
export interface ISkill {
  name: string | ReactNode;
  percent: number;
}
export default [ts] as ISkill[];
