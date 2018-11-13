import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from "./app.component";
import { MainContainerComponent } from "./main-container/main-container.component";
import { LeftNavigationComponent } from "./left-navigation/left-navigation.component";
import { AuthorBioComponent } from "./author-bio/author-bio.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { JavascriptBlogsComponent } from "./javascript-blogs/javascript-blogs.component";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
  { path: "home", component: HomepageComponent },
  {
    path: "topics",
    component: LeftNavigationComponent,
    children: [
      { path: "authorBio", component: AuthorBioComponent },
      { path: "javascriptBlogs", component: JavascriptBlogsComponent }
    ]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "blogs", component: BlogsComponent }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
