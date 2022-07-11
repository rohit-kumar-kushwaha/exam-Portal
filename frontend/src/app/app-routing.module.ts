import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddGroupComponent } from './pages/admin/add-group/add-group.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizGroupComponent } from './pages/admin/add-quiz-group/add-quiz-group.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AttemptedQuizComponent } from './pages/admin/attempted-quiz/attempted-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateGroupQuizComponent } from './pages/admin/update-group-quiz/update-group-quiz.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewGroupQuizComponent } from './pages/admin/view-group-quiz/view-group-quiz.component';
import { ViewGroupsComponent } from './pages/admin/view-groups/view-groups.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { JoinGroupComponent } from './pages/user/join-group/join-group.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { MarksDetailsComponent } from './pages/user/marks-details/marks-details.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { WelcomUserComponent } from './pages/user/welcom-user/welcom-user.component';
import { ViewGroupMembersComponent } from './pages/view-group-members/view-group-members.component';
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
        path: 'update-profile',
        component: UpdateProfileComponent,

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
        path: 'attempted-quiz/:qid',
        component: AttemptedQuizComponent,

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
      {
        path: 'add-quiz/:gid',
        component: AddQuizGroupComponent,

      },
      {
        path: 'add-group-quiz/:gid',
        component: ViewGroupQuizComponent,

      },
      {
        path: 'update-group-quiz/:qid',
        component: UpdateGroupQuizComponent,

      },
      {
        path: 'group-member/:gid',
        component: ViewGroupMembersComponent,

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
        path: '',
        component: WelcomUserComponent,
      },
      {
        path: 'user-profile',
        component: ProfileComponent,
      },
      {
        path: 'user-update-profile',
        component: UpdateProfileComponent,

      },
      {
        path: 'attempted-quiz/:uid',
        component: MarksDetailsComponent,

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
