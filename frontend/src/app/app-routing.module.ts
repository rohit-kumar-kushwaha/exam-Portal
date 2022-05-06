import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddGroupComponent } from './pages/admin/add-group/add-group.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewGroupsComponent } from './pages/admin/view-groups/view-groups.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { JoinGroupComponent } from './pages/user/join-group/join-group.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    //pathMatch: 'full',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,

      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,

      },
      {
        path: 'add-category',
        component: AddCategoryComponent,

      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,

      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,

      },
      {
        path: 'quiz/:qid',
        component: UpdateQuizComponent,

      },
      {
        path: 'view-questions/:qid/:title',
        component: ViewQuizQuestionsComponent,

      },
      {
        path: 'add-question/:qid/:title',
        component: AddQuestionComponent,

      },
      {
        path: 'question/:questionId/:title',
        component: UpdateQuestionComponent,

      },
      {
        path: 'groups',
        component: ViewGroupsComponent,

      },
      {
        path: 'add-group',
        component: AddGroupComponent,

      },


    ]


  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    // pathMatch: 'full',
    canActivate: [NormalGuard],
    children:[
      {
        path: 'user-profile',
        component: ProfileComponent,
      },
      {
        path: 'join-group',
        component: JoinGroupComponent,
      },
      {
        path: ':catId',
        component: LoadQuizComponent,
      },
      {
        path: 'instruction/:qid',
        component: InstructionsComponent,
      },
      

      
      
    ]
    
  },
  {
    path: 'start/:qid',
    component: StartQuizComponent,
    canActivate: [NormalGuard],
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
