import './../../jspdf.min';
import {html2pdf} from './../../html2pdf';
import template from './template.html!text';

export class Welcome {
    constructor() {
        console.log(template);
    }

    export() {
        var pdf = new jsPDF('p', 'pt', 'letter');

        var html = template;

        html2pdf(html, pdf, function(pdf) {
            pdf.output('dataurlnewwindow');
        });

        //doc.save('a4.pdf');
    }
}