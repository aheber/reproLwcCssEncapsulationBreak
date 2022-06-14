import { LightningElement } from 'lwc';
import template from "./template1.html";
import stylesheets from "./breaks.css";

export default class Breaks extends LightningElement {
    render() {
        // if I had a tempalte1.css file as a sibling to tempalte1.html then this wouldn't be necessary
        template.stylesheets = stylesheets;
        // template.stylesheetToken = "c_breaks-breaks"; // uncommenting will fix this component
        return template;
    }
}