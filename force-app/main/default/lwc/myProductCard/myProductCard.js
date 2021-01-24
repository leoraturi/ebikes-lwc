import { api, LightningElement } from 'lwc';

import { getFieldValue } from 'lightning/uiRecordApi';

// this is to define schema property
import CATEGORY_FIELD from '@salesforce/schema/Product__c.Category__c';
import LEVEL_FIELD from '@salesforce/schema/Product__c.Level__c';
import MSRP__FIELD from '@salesforce/schema/Product__c.MSRP__c';
import BATTERY_FIELD from '@salesforce/schema/Product__c.Battery__c';
import CHARGER_FIELD from '@salesforce/schema/Product__c.Charger__c';
import MOTOR_FIELD from '@salesforce/schema/Product__c.Motor__c';
import PICTURE_URL from '@salesforce/schema/Product__c.Picture_URL__c';
import NAME from '@salesforce/schema/Product__c.Name';
export default class MyProductCard extends LightningElement {
    levelField = LEVEL_FIELD;
    categoryField = CATEGORY_FIELD ; 
    msrpField = MSRP__FIELD;
    batteryField = BATTERY_FIELD;
    chargerField = CHARGER_FIELD;
    motorField = MOTOR_FIELD;
    productPictureUrl;
    productName;
    _product;

    @api
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
    }
    connectedCallback() {
        console.log('hello' + this._product);
    }
    handleRecordLoaded(event){
        const { records } = event.detail;
        const recordData = records[this._product];
        this.productPictureUrl = getFieldValue(recordData,PICTURE_URL);
        this.productName = getFieldValue(recordData,NAME);

    }
}
