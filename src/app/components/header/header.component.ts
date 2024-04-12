import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  
  handlelick(){
  const menu=document.getElementById("menu")
  menu?.classList.toggle('menu-bar')
  menu?.classList.toggle('hide-menu')

  const blur=document.getElementById("blur-bg")
  blur?.classList.toggle("no-blur")
  blur?.classList.toggle("blur")
  
  
  
}
}
