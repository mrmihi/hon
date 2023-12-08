import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [MenubarModule],
})
export class HeaderComponent implements OnInit {
  @Output() selectedRoute = new EventEmitter<string>();
  items: MenuItem[] | undefined;

  onSelect(route: string) {
    console.log('onSelect: ' + route);
    this.selectedRoute.emit(route);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Books',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark',
              },
            ],
          },
          {
            label: 'View',
            icon: 'pi pi-fw pi-trash',
            command: () => this.onSelect('books'),
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Wish List',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-align-left',
            command: () => this.onSelect('wish-list'),
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
    ];
  }
}
