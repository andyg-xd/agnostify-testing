import { Component } from '@angular/core';
  import { AutoCompleteModule } from 'primeng/autocomplete';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';

  interface Country {
    name: string;
    code: string;
  }

  @Component({
    selector: 'app-country-autocomplete',
    standalone: true,
    imports: [AutoCompleteModule, FormsModule, CommonModule],
    template: `
      <div class="field">
        <label for="country" class="block mb-2 font-semibold">Country</label>
        <p-autoComplete
          [(ngModel)]="selectedCountries"
          [suggestions]="filteredCountries"
          (completeMethod)="filterCountry($event)"
          field="name"
          [multiple]="true"
          [showClear]="true"
          [loading]="isLoading"
          placeholder="Search countries..."
          [minLength]="1"
          [delay]="300"
          (onSelect)="onSelect($event)"
          (onUnselect)="onUnselect($event)"
          (onClear)="onClear()"
          inputId="country"
          appendTo="body"
          [style]="{ width: '100%' }"
        />
        <small *ngIf="errorMessage" class="p-error block mt-1">{{ errorMessage
  }}</small>
        <small *ngIf="selectedCountries.length" class="block mt-1
  text-color-secondary">
          {{ selectedCountries.length }} country selected
        </small>
      </div>
    `
  })
  export class CountryAutocompleteComponent {
    selectedCountries: Country[] = [];
    filteredCountries: Country[] = [];
    isLoading = false;
    errorMessage = '';

    private all: Country[] = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'Canada', code: 'CA' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Mexico', code: 'MX' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];

    filterCountry(event: { query: string }) {
      this.isLoading = true;
      setTimeout(() => {
        const q = event.query.toLowerCase();
        this.filteredCountries = this.all.filter(c =>
  c.name.toLowerCase().includes(q));
        if (!this.filteredCountries.length) this.errorMessage = 'No matches
  found';
        else this.errorMessage = '';
        this.isLoading = false;
      }, 300);
    }

    onSelect(country: Country) {
      this.errorMessage = '';
    }

    onUnselect(country: Country) {
      if (!this.selectedCountries.length) this.errorMessage = '';
    }

    onClear() {
      this.selectedCountries = [];
      this.errorMessage = '';
    }
  }