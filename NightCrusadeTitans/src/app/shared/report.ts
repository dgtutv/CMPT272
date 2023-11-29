export class Report {
    id: number;
    reporterName: string;
    phoneNumber: number;
    suspectName: string;
    locationName: string;
    longitude: number;
    latitude: number;
    picture?: string;
    extraInfo: string;
    timeReported: number;
    resolved: boolean;
    showMoreInfo: boolean = false; 
    distance: number = 0;

    constructor(reporterName:string, phoneNumber:number, suspectName: string, locationName: string, longitude: number, latitude: number, picture: string, extraInfo: string, id: number, timeReported: number, resolved: boolean){
        this.reporterName = reporterName;
        this.phoneNumber = phoneNumber;
        this.suspectName = suspectName;
        this.locationName = locationName;
        this.longitude = longitude;
        this.latitude = latitude;
        this.timeReported = timeReported;
        this.resolved = resolved;
        if(picture != ""){
        this.picture = picture;
        }
        this.extraInfo = extraInfo;
        this.id = id;
    }
}