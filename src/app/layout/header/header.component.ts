import { ThemeService } from './../../services/theme.service';
import { Component } from '@angular/core';

interface menuInfo{
  name:string,
  list?:menuInfo[],
  path:string
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  menuList:menuInfo[] = [
    {
      name:'首页 ',
      path:''
    },
    {
      name:'全部课程 ',
      path:'',
    },
    {
      name:'Unity ',
      path:'',
      list:[
        {
          name:'Unity 全部课程',
          path:'/class'
        },
        {
          name:'Unity A计划（永久）',
          path:'/plan/2/introduction'
        },
        {
          name:'Unity学习路线',
          path:''
        },
      ]
    },
    {
      name:'虚幻 ',
      path:''
    },
    {
      name:'Cocos ',
      path:''
    },
    {
      name:'Java ',
      path:''
    },
    {
      name:'Python AI ',
      path:''
    },
    {
      name:'小程序',
      path:'',
      list:[
        {
          name:'微信小程序 全部课程',
          path:'/class'
        },
        {
          name:'微信小程序 A计划（永久）',
          path:'/wx-aplan'
        },
        {
          name:'微信小程序学习路线',
          path:''
        },
      ]
    },
    {
      name:'合作课程',
      path:''
    },
    {
      name:'其他',
      path:''
    },
  ]

  constructor(private themeService: ThemeService) {

  }

  changeTheme(theme:string) {
    localStorage.setItem('theme', theme)
    this.themeService.change()
  }
}
