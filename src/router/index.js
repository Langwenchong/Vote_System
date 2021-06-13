import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import login from '@/components/login'
import register from '@/components/register'
import Console from '@/Components/Console'
import account from '@/components/account'
import messages from '@/components/messages'
import conmmunication from '@/components/conmmunication'
import dashBoard from '@/components/dashBoard'
import settings from '@/components/settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      alias: '/Container/login',
      name: 'Container',
      component: Container,
      children: [
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'register',
          name: 'register',
          component: register
        }
      ]
    },
    {
      path: '/Console',
      name: 'Console',
      component: Console,
      children: [
        {
          path: 'account',
          name: 'account',
          component: account
        },
        {
          path: 'messages',
          name: 'messages',
          component: messages,
          children: [
            {
              path: 'conmmunication',
              name: 'conmmunication',
              component: conmmunication
            }
          ]
        },
        {
          path: 'dashBoard',
          name: 'dashBoard',
          component: dashBoard,
          children: [
            {
              path: 'settings',
              name: 'settings',
              component: settings
            }
          ]
        }
      ]
    }
  ]
})
