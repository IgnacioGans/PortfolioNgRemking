import { WpBlogComponent } from './WpComponent/wp-blog/wp-blog.component';
import { Component } from '@angular/core';
declare var Dragend: any;
declare var jQuery: any;
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-ng-remking';
  ngOnInit(){
    var remkingDragend = new Dragend(document.getElementById("portfolio-remking"));
    (function ($) {
      const d = new Date();
      let year = d.getFullYear();
      $(".yearMeridiano").text(year)
      $("#net-previous-job").hide();
      $("#portfolio-remking").dragend();
      $(".btn-right").on("click", function() {
        $("#portfolio-remking").dragend("left");
        //console.log("move to left")
      });
      $(".btn-left").on("click", function() {
        $("#portfolio-remking").dragend("right");
        //console.log("move to right")
      });
      $(".nav .nav-link").click(function (e) {
        e.preventDefault();
        $(".nav .nav-link").removeClass("active")
        let dataNav = $(this).data()
        $(this).addClass("active")
        dataNav = dataNav.clicknav
        if (dataNav) {
          $("#portfolio-remking").show()
          $("#net-previous-job").hide();
        }else{
          $("#portfolio-remking").hide()
          $("#net-previous-job").show();
        }
      });
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
    })(jQuery);
  }
  
}
