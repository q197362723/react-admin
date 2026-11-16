import type {AppState} from './stores';
declare module 'react-redux' {
    export interface DefaultRootState extends AppState {}
}