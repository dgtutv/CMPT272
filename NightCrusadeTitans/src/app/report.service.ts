import { Injectable } from '@angular/core';
import { Report } from './shared/report';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { nanoid } from 'nanoid';
import { ref, set, get, child, remove } from "firebase/database";
import { db } from '../environments/firebase.config';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private collectionKey = 'reports';

  constructor(private http: HttpClient) { }

  async pull(): Promise<Report[]> {
    const reportsRef = ref(db, this.collectionKey);
    const snapshot = await get(reportsRef);
    let parsedReports: Report[] = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const reportData = childSnapshot.val();
        parsedReports.push({ ...reportData, id: childSnapshot.key });
      });
    }
    return parsedReports;
  }

  async push(newReport: Report): Promise<void> {
    const newReportRef = ref(db, `${this.collectionKey}/${nanoid()}`);
    await set(newReportRef, newReport);
  }

  async delete(reportToDelete: Report): Promise<void> {
    const reportRef = ref(db, `${this.collectionKey}/${reportToDelete.id}`);
    await remove(reportRef);
  }

  generateId(): string {
    return nanoid();
  }
}