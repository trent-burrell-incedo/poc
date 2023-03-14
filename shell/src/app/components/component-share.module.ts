import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TopNavComponent } from "./top-nav/top-nav.component";

@NgModule({
    imports: [
        FormsModule, CommonModule,
    ],
    declarations: [
        TopNavComponent,
    ],
    exports: [
        TopNavComponent,
    ]
})

export class ComponentShareModule { }