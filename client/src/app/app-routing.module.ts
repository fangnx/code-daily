import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserManagementPanelComponent } from "./components/dashboard/user-management-panel/user-management-panel.component";
import { ContentPanelComponent } from "./components/dashboard/content-panel/content-panel.component";
import { RegistrationComponent } from "./components/dashboard/user-management-panel/registration/registration.component";
import { LoginComponent } from "./components/dashboard/user-management-panel/login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: ContentPanelComponent },
  { path: "user", component: UserManagementPanelComponent },
  { path: "user/register", component: RegistrationComponent },
  { path: "user/login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
