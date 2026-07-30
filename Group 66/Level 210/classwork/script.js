"use strict";
// 1) შექმენით interface რომელსაც ჩააშენებთ კლასში implements keyword დახმარებით
Object.defineProperty(exports, "__esModule", { value: true });
class Group {
    identify(id) {
        console.log(`I'm ${id.toFixed(2)}.`);
    }
}
;
const student1 = new Group();
student1.identify(5);
// 2) შექმენით ერთმანეთში ჩაშენებული 4 ტიპის ობიექტი დააკვირდით რამდენად რთულია წერაც და წაკითხვაც, შემდეგ დაყავეთ ეს ინტერფეისი სხვადასხვა ინტერფეისებად
// 3) შექმენით ერთი ზოგადი interface და შემდეგ კონკრეტული interface რომელსაც გააფართოვებთ ზოგადი interface დახმარებით
// 4) ახსენით კომენტარებიოთ რა არის implements და extends რეზერვირებული სიტყვები და რაში გვეხმარება ისინი.
//# sourceMappingURL=script.js.map