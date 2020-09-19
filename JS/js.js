// /*global document,window,$,WOW,Rellax */

let isOpenned = true;

$(".menu").click(function () {
  $(".PopupMenu").fadeToggle(0);
  isOpenned = !isOpenned;
  $(".background").fadeToggle(600);
  $("nav h2").toggleClass("opacityOff");
  $("body").toggleClass("overFlow");
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $("body").removeClass("marginRight");
  } else {
    $("body").toggleClass("marginRight");
  }
  if (isOpenned == true) {
    if (window.location.hash === "#ar") {
      $(".menu button p").text("فتح");
    } else {
      $(".menu button p").text("OPEN");
    }
  } else {
    if (window.location.hash === "#ar") {
      $(".menu button p").text("غلق");
    } else {
      $(".menu button p").text("CLOSE");
    }
  }
});

$(".menu").hover(function () {
  if (isOpenned == true) {
    if (window.location.hash === "#ar") {
      $(".menu button p").text("فتح");
    } else {
      $(".menu button p").text("OPEN");
    }
  } else {
    if (window.location.hash === "#ar") {
      $(".menu button p").text("غلق");
    } else {
      $(".menu button p").text("CLOSE");
    }
  }
});

$(".menu").mouseleave(function () {
  if (window.location.hash === "#ar") {
    $(".menu button p").text("القائمة");
  } else {
    $(".menu button p").text("MENU");
  }
});

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  $(".search input").css({
    padding: "0",
    width: "0",
  });
  $(".menu button p").hide();
} else {
  $(".search input").css({
    padding: "5px 42px 5px 8px",
    width: "200px",
  });
  $(".menu button p").show();
}

let jsonLang = {
  ar: {
    Header: {
      Name: "كلوزة",
      Time: "الوقت هو الاهم",
      Menu: "القائمة",
      Search: "بحث",
      MenuElements: ["الصفحة الرئيسية", "المتجر", "عن كلوزة", "تواصل معنا"],
    },
    About: {
      AboutCluse: "عن كلوزة",
      AboutParagraph:
        "كلوزة للساعات والمجوهرات صمم بأمستردام. بقيادة فريق من الافراد الطموحين. قد اصبحنا واحد م ن اسرع العلامات التجارية نموا في العالم. حلمنا كبير, ولكن تركيزنا ينصب على الاشياء الصغيرة. الانتباه للتفاصيل اساسي في كل ما نفعله. نحتضن فرصنا. فكل يوم هنا هو شغف عظيم لنا.",
    },
    Details: {
      BeautyInDetails: "الجمال في التفاصيل",
      DetailsParagraph:
        "كلوزة للساعات والمجوهرات صمم بأمستردام. بقيادة فريق من الافراد الطموحين. قد اصبحنا واحد م ن اسرع العلامات التجارية نموا في العالم. حلمنا كبير, ولكن تركيزنا ينصب على الاشياء الصغيرة. الانتباه للتفاصيل اساسي في كل ما نفعله. نحتضن فرصنا. فكل يوم هنا هو شغف عظيم لنا.",
    },
    ReachOutToUs: "تواصل معنا",
    Help: {
      ThisMightHelp: "كيف يمكننا المساعدة",
      HelpList: [
        "خدمة العملاء",
        "اماكن المحال",
        "الشحن وسياسة الاسترجاع",
        "دليل المقاسات والاحجام",
      ],
      Watches: [
        "الساعات",
        "ساعات الرجال",
        "ساعات السيدات",
        "الافضل مبيعاً",
        "الجديد",
      ],
      Jewellery: [
        "المجوهرات",
        "كل المجوهرات",
        "الافضل مبيعاً",
        "الجديد",
        "الاساور",
        "الاعقاد",
        "حلق الاذن",
        "الخواتم",
      ],
      Straps: ["الاساور", "كل الاساور", "الافضل مبيعاً", "الجديد"],
      About: ["عن كلوزة", "قصتنا", "المحال", "الوظائف", "تعاوناتنا"],
    },
    Copyright: ["جميع الحقوق محفوطة &copy; ", "۲۰۲۰"],
  },
};

$(".lang button.en").click(function (e) {
  e.preventDefault();
  window.location.hash = "en";
  window.location.reload(true);
});

$(".lang button.ar").click(function (e) {
  e.preventDefault();
  window.location.hash = "ar";
  window.location.reload(true);
});

let el = $("#rtl");

if (window.location.hash == "#ar") {
  $("body").prepend(el);
} else {
  el.detach();
}

if (window.location.hash === "#ar") {
  $("#Name").text(jsonLang.ar.Header.Name);
  $("#MenuText").text(jsonLang.ar.Header.Menu);
  $("#Time").text(jsonLang.ar.Header.Time);
  $("#search").attr("placeholder", jsonLang.ar.Header.Search);

  $("#ME0").text(jsonLang.ar.Header.MenuElements[0]);
  $("#ME1").text(jsonLang.ar.Header.MenuElements[1]);
  $("#ME2").text(jsonLang.ar.Header.MenuElements[2]);
  $("#ME3").text(jsonLang.ar.Header.MenuElements[3]);

  $(".lang button.ar").text("عربي");
  $(".lang button.en").text("انجليزي");

  $("#AboutCluse").text(jsonLang.ar.About.AboutCluse);
  $("#AboutParagraph").text(jsonLang.ar.About.AboutParagraph);

  $("#BeautyInDetails").text(jsonLang.ar.Details.BeautyInDetails);
  $("#DetailsParagraph").text(jsonLang.ar.Details.DetailsParagraph);

  $("#ReachOutToUs").text(jsonLang.ar.ReachOutToUs);

  $("#ThisMightHelp").text(jsonLang.ar.Help.ThisMightHelp);
  $("#info span").text(jsonLang.ar.Help.HelpList[0]);
  $("#store span").text(jsonLang.ar.Help.HelpList[1]);
  $("#truck span").text(jsonLang.ar.Help.HelpList[2]);
  $("#ruler span").text(jsonLang.ar.Help.HelpList[3]);

  $("#Watches").text(jsonLang.ar.Help.Watches[0]);
  $("#WMW").text(jsonLang.ar.Help.Watches[1]);
  $("#WWW").text(jsonLang.ar.Help.Watches[2]);
  $("#WBS").text(jsonLang.ar.Help.Watches[3]);
  $("#WNI").text(jsonLang.ar.Help.Watches[4]);

  $("#Jewellery").text(jsonLang.ar.Help.Jewellery[0]);
  $("#JAJ").text(jsonLang.ar.Help.Jewellery[1]);
  $("#JBS").text(jsonLang.ar.Help.Jewellery[2]);
  $("#JNI").text(jsonLang.ar.Help.Jewellery[3]);
  $("#JB").text(jsonLang.ar.Help.Jewellery[4]);
  $("#JN").text(jsonLang.ar.Help.Jewellery[5]);
  $("#JE").text(jsonLang.ar.Help.Jewellery[6]);
  $("#JR").text(jsonLang.ar.Help.Jewellery[7]);

  $("#Straps").text(jsonLang.ar.Help.Straps[0]);
  $("#SAS").text(jsonLang.ar.Help.Straps[1]);
  $("#SBS").text(jsonLang.ar.Help.Straps[2]);
  $("#SNI").text(jsonLang.ar.Help.Straps[3]);

  $("#About").text(jsonLang.ar.Help.About[0]);
  $("#AOS").text(jsonLang.ar.Help.About[1]);
  $("#AS").text(jsonLang.ar.Help.About[2]);
  $("#AC").text(jsonLang.ar.Help.About[3]);
  $("#ACO").text(jsonLang.ar.Help.About[4]);

  $("#CopySpan").html(jsonLang.ar.Copyright[0]);
  $("#DateSpan").text(jsonLang.ar.Copyright[1]);
}
