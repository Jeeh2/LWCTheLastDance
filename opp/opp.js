import { LightningElement, wire } from 'lwc';
import getLastOpp from '@salesforce/apex/opp.getLastOpp';

export default class opp extends LightningElement {
    @wire(getLastOpp) opps;
}
