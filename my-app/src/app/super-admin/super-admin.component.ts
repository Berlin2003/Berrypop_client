import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsService } from '../details.service';
import { FormsModule } from '@angular/forms';







@Component({
  selector: 'app-super-admin',
  imports: [
    CommonModule,FormsModule],
  templateUrl: './super-admin.component.html',
  styleUrl: './super-admin.component.scss'
})
export class SuperAdminComponent implements OnInit {

data: any[] = [];
  filteredData: any[] = [];
  pageSize = 10;
  currentPage = 1;
  totalPages = 1;
 statusOptions = ['PROCESSING', 'COMPLETED'];
  paymentOptions = ['NONE', 'PENDING', 'COMPLETED'];


  constructor(private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.detailsService.getDetails().subscribe({
      next: (response) => {
        this.data = response.map((item: any) => ({
          ...item,
          date: item.date ? new Date(item.date).toLocaleString() : 'N/A',
        }));
        this.filteredData = [...this.data];
        this.updatePagination();
      },
      error: (err) => console.error('Error fetching details:', err)
    });
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredData = this.data.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(value)
      )
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  updateStatusPayment(row: any): void {
    const payload = {
      id: row.id,
      status: row.status,     // Already selected from dropdown using correct case
      payment: row.payment    // Already selected from dropdown using correct case
    };

    this.detailsService.updateDetails(payload.id, payload.status, payload.payment).subscribe({
      next: () => alert('Updated successfully'),
      error: (err) => alert('Update failed: ' + err.error?.error || err.message)
    });
  }

    logout(): void {
    localStorage.removeItem('token');
    window.location.href = '/login'; // adjust route if needed
  }

  deleteDetails(id: number): void {
  if (confirm('Are you sure you want to delete this entry?')) {
    this.detailsService.deleteDetails(id).subscribe({
      next: () => {
        alert('Deleted successfully');
        this.data = this.data.filter(item => item.id !== id);
        this.filteredData = this.filteredData.filter(item => item.id !== id);
        this.updatePagination();
      },
      error: (err: { error: { error: string; }; message: any; }) => {
        alert('Delete failed: ' + err.error?.error || err.message);
      }
    });
  }
}


}
