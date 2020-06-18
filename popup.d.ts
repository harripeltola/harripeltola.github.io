import { FunctionalComponent } from 'preact';
import './popup.scss';
export interface IPopupProps {
    id?: string;
    message?: string;
    btnYesTitle?: string;
    btnNoTitle?: string;
    redirectUrl: string;
    timeout: number;
}
export declare const Popup: FunctionalComponent<IPopupProps>;
