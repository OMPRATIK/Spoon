import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ForkifyService } from '../forkify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  query: string = '';

  constructor(private forkifyServic: ForkifyService, private router: Router) {}

  searchRecipes() {}
  ngOnInit(): void {}
}
