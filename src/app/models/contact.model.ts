export class Contact {

    constructor(emailAddress: string, mobileNumber: string, phoneNumber: string, city: string) {
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.mobileNumber = mobileNumber;
    }

    public emailAddress: string;
    public mobileNumber: string;
    public phoneNumber: string;
    public city: string;

}
