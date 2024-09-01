import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[appDropdown]",
    standalone: true,
})
export class DropdownDirective {
    @HostBinding("class.open") isOpen = false;
    @HostListener("click", ["$event"]) toggle(event: Event){
        this.isOpen = !this.isOpen;
        console.log(event)
    }
}