import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserManagementPanelComponent } from "./components/dashboard/user-management-panel/user-management-panel.component";
import { ContentPanelComponent } from "./components/dashboard/content-panel/content-panel.component";
import { RegistrationComponent } from "./components/dashboard/user-management-panel/registration/registration.component";
import { LoginComponent } from "./components/dashboard/user-management-panel/login/login.component";
import { SubscriptionManagementComponent } from "./components/dashboard/user-management-panel/subscription-management/subscription-management.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: ContentPanelComponent },
  {
    path: "user/:pocket_request_token",
    component: UserManagementPanelComponent,
  },
  { path: "user/register", component: RegistrationComponent },
  { path: "user/login", component: LoginComponent },
  { path: "subscription", component: SubscriptionManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
