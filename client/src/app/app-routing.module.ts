import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavigationPanelComponent } from "./components/dashboard/navigation-panel/navigation-panel.component";
import { UserManagementPanelComponent } from "./components/dashboard/user-management-panel/user-management-panel.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: NavigationPanelComponent },
  { path: "user", component: UserManagementPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
