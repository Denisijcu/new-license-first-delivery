import Vue from 'vue';
import Router from 'vue-router';

/** Section Admin **/
import Dashboard from '@/components/Dashboard';
import NewQuestion from '@/components/NewQuestion';
import ViewsQuestion from '@/components/ViewsQuestion';
import EditQuestion from '@/components/EditQuestion';

import QAdashboard from '@/components/QAdashboard';
import AddQA from '@/components/AddQA';
import EditQA from '@/components/EditQA';

import Login from '@/components/Login';
import Register from '@/components/Register';

import firebase from 'firebase';


/** Section User**/
import FrontPage from '@/components/FrontPage';
import UserNavbar from '@/components/UserNavbar';
import About from '@/components/About';
import Contact from '@/components/Contact';
import UserProfile from '@/components/UserProfile';
import Course from '@/components/Course';


Vue.use(Router);

let router = new Router({
  routes: [


    {
      path: '/frontpage',
      name: 'frontpage',
      component: FrontPage,
      meta: {
        requiresGuest: true
      }
    },

    {
      path: '/',
      name: 'frontpage',
      component: FrontPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/userNavbar',
      name: 'userNavbar',
      component: UserNavbar,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        requiresGuest: true
      }
    },

    {
      path: '/userProfile',
      name: 'UserProfile',
      component: UserProfile,
      meta: {
        requiresAuth: true
      }
    },



    {
      path: '/admin',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },

    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/new',
      name: 'new-question',
      component: NewQuestion,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:question_id',
      name: 'edit-question',
      component: EditQuestion,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:question_id',
      name: 'view-question',
      component: ViewsQuestion,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'qadashboard/:question_id',
      name: 'qadashboard',
      component: QAdashboard,
      meta: {
        requiresAuth: true
      }

    },

    {
      path: '/addQuestion/:question_id',
      name: 'add-question',
      component: AddQA,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editQAQuestion/:question_id/:question_Id',
      name: 'edit-qaquestion',
      component: EditQA,
      meta: {
        requiresAuth: true
      }
    },

  ]
});

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
