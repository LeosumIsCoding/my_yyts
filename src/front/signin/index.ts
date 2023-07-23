import { VueModule } from "@f/entity/ITemplate";

export const SignInModule: VueModule = {
    name: 'signin',
    router: {
        path: '/signin',
        name: 'Signin',
        component: () => import('./index.vue'),

        children: [
            {
                path: '/login',
                name: 'Signin-Login',
                component: () => import('./LoginView.vue')
            },
            {
                path: '/register',
                name: 'Signin-Register',
                component: () => import('./RegisterView.vue')
            }
        ]
    }
}