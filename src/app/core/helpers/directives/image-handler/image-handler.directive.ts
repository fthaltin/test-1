import { Directive, ElementRef, HostBinding, Input } from "@angular/core";
@Directive({
  selector: "img[src]",
  host: {
    "[src]": "src",
    "(load)": "onLoad()",
    "(error)": "onError()"
  }
})
export class ImageHandlerDirective {
  public loadingImg: string = "assets/images/loading_placeholder.png";
  public defaultImg: string = "assets/images/placeholder.png";
  public defaultAvatarImg: string = "assets/images/avatar_placeholder.png";
  @Input() src: string;

  constructor(private hostElement: ElementRef) {}

  onLoad() {
    return this.src ? this.src : this.getDefaultImage();
  }
  onError() {
    this.src = this.getDefaultImage();
  }

  getDefaultImage() {
    return this.isAvatarImage() ? this.defaultAvatarImg : this.defaultImg;
  }
  isAvatarImage() {
    const avatarAttr = this.hostElement.nativeElement.getAttribute(
      "mat-card-avatar"
    );
    return typeof avatarAttr == "string";
  }
}
