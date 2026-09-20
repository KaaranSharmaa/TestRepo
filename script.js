// ============================================================
//  CONFIGURATION â€” edit these to personalise the site
// ============================================================

// 1. PASSWORD â€” change this to whatever you like
const PASSWORD = "kanda";

// 2. PHOTOS â€” add filenames from your /images folder here.
//    Format: { src: "images/filename.jpg", caption: "optional caption" }
//    Leave caption as "" if you don't want one.
const photos = [
  { src: "images/1.jpeg", caption: "Luv you babe" },
  { src: "images/10.jpeg", caption: "luv you babedi" },
  { src: "images/2.jpeg", caption: "love you monkey" },
  { src: "images/3.jpeg", caption: "luv you mote chutad ki" },
  { src: "images/4.jpeg", caption: "luv you janemaan" },
  { src: "images/5.jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/6.jpeg", caption: "oo babe meri" },
  { src: "images/7.jpeg", caption: "Biwi ch......" },
  { src: "images/8.jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.16 PM.jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.17 PM.jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.37 PM (1).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.37 PM (2).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.37 PM (3).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.38 PM (1).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.38 PM.jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.39 PM (1).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.40 PM.jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.41 PM (1).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.41 PM (2).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.41 PM (3).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.41 PM.jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.42 PM (1).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.42 PM.jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.43 PM (1).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.43 PM (2).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.43 PM (3).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.43 PM.jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.44 PM (1).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.44 PM (2).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.44 PM.jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.45 PM.jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.46 PM (1).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.46 PM.jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.47 PM (1).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.47 PM (2).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.47 PM.jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.48 PM (1).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.48 PM (2).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.48 PM (3).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.48 PM.jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.49 PM (1).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.49 PM (2).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.49 PM.jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.50 PM (1).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.50 PM.jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.51 PM (1).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.51 PM.jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.52 PM (1).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.52 PM (2).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.52 PM.jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.53 PM (1).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.53 PM (2).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.53 PM.jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.54 PM.jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.55 PM (1).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.55 PM (2).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.55 PM (3).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.55 PM.jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.56 PM (1).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.56 PM.jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.57 PM (1).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.57 PM (2).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.57 PM (3).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.57 PM.jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.58 PM (1).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.58 PM (2).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.58 PM (3).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.58 PM.jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.59 PM (1).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.59 PM (2).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.59 PM (3).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.15.59 PM.jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.00 PM (1).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.00 PM (2).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.00 PM.jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.01 PM (1).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.01 PM (2).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.01 PM (3).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.01 PM.jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.02 PM (1).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.02 PM (2).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.02 PM.jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.03 PM (1).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.03 PM (2).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.03 PM (3).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.03 PM.jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.04 PM (1).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.04 PM (2).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.04 PM.jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.05 PM (1).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.05 PM (2).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.05 PM.jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.06 PM (1).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.06 PM (2).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.06 PM (3).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.06 PM.jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.07 PM.jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.08 PM (1).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.16.08 PM.jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.18.31 PM (1).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.18.31 PM (2).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.18.31 PM (3).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.18.31 PM.jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.17 PM.jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.18 PM (1).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.18 PM (2).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.18 PM.jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.19 PM (1).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.19 PM.jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.20 PM (1).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.20 PM (2).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.20 PM.jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.22 PM.jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.23 PM.jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.28 PM.jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.29 PM.jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.30 PM (1).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.30 PM.jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.31 PM (1).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.31 PM (2).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.31 PM.jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.32 PM (1).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.32 PM (2).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.32 PM.jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.33 PM (1).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.33 PM.jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.34 PM (1).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.34 PM.jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.35 PM (1).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.35 PM (2).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.35 PM.jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.36 PM (1).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.36 PM.jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.37 PM (1).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.37 PM (2).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.37 PM.jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.20.39 PM.jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.55 PM (1).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.55 PM.jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (1).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (10).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (13).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (15).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (16).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (17).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (18).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (19).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (2).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (20).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (22).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (23).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (24).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (25).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (3).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (4).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (5).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (6).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (7).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (8).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM (9).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.57 PM.jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.58 PM.jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (1).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (10).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (11).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (12).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (13).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (14).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (15).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (16).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (17).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (18).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (19).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (2).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (20).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (21).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (22).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (23).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (24).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (25).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (26).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (27).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (28).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (29).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (3).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (30).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (31).jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (32).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (33).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (34).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (4).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (5).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (6).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (7).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (8).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM (9).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.40.59 PM.jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.44.45 PM (2).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.44.45 PM (5).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.35 PM (1).jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.35 PM.jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.36 PM (1).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.36 PM (2).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.36 PM.jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.37 PM (1).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.37 PM (2).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.37 PM.jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.38 PM (1).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.38 PM (2).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.38 PM.jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.39 PM (1).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.39 PM (2).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.39 PM (3).jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.39 PM.jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.40 PM (1).jpeg", caption: "Aja tera lips kha jau" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.40 PM (2).jpeg", caption: "oo babe meri" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.40 PM.jpeg", caption: "Biwi ch......" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.41 PM (1).jpeg", caption: "i luv you" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.41 PM (2).jpeg", caption: "Uff looking sexy" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.41 PM.jpeg", caption: "Luv you babe" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.42 PM (1).jpeg", caption: "luv you babedi" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.42 PM (2).jpeg", caption: "love you monkey" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.42 PM.jpeg", caption: "luv you mote chutad ki" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.43 PM (1).jpeg", caption: "luv you janemaan" },
  { src: "images/WhatsApp Image 2026-09-20 at 10.47.43 PM.jpeg", caption: "Aja tera lips kha jau" },
];

// ============================================================
//  PASSWORD LOGIC
// ============================================================
function checkPassword() {
  const input = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");

  if (input === PASSWORD) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("landing-page").classList.remove("hidden");
    errorMsg.classList.remove("show");
  } else {
    errorMsg.classList.add("show");
    document.getElementById("password-input").value = "";
    document.getElementById("password-input").focus();
  }
}

// Allow pressing Enter key on the password input
document.getElementById("password-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") checkPassword();
});

// ============================================================
//  NAVIGATION
// ============================================================
function openGallery() {
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("gallery-page").classList.remove("hidden");
  loadPhoto(currentIndex);
}

function goBack() {
  document.getElementById("gallery-page").classList.add("hidden");
  document.getElementById("landing-page").classList.remove("hidden");
}

// ============================================================
//  SLIDESHOW
// ============================================================
let currentIndex = 0;

function loadPhoto(index) {
  const img     = document.getElementById("slide-img");
  const caption = document.getElementById("slide-caption");
  const counter = document.getElementById("slide-counter");

  // Fade out
  img.classList.add("fade");

  setTimeout(() => {
    img.src          = photos[index].src;
    caption.textContent = photos[index].caption || "";
    counter.textContent = `${index + 1} / ${photos.length}`;

    // Fade back in once image is loaded
    img.onload = () => img.classList.remove("fade");
    // Fallback in case image is cached and onload doesn't fire
    if (img.complete) img.classList.remove("fade");
  }, 200);
}

function nextPhoto() {
  currentIndex = (currentIndex + 1) % photos.length;
  loadPhoto(currentIndex);
}

function prevPhoto() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  loadPhoto(currentIndex);
}

// Keyboard arrow navigation
document.addEventListener("keydown", function (e) {
  const galleryVisible = !document.getElementById("gallery-page").classList.contains("hidden");
  if (!galleryVisible) return;
  if (e.key === "ArrowRight") nextPhoto();
  if (e.key === "ArrowLeft")  prevPhoto();
});

// Touch/swipe support for mobile
let touchStartX = 0;

document.getElementById("gallery-page").addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.getElementById("gallery-page").addEventListener("touchend", function (e) {
  const diff = touchStartX - e.changedTouches[0].screenX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextPhoto();
    else          prevPhoto();
  }
}, { passive: true });



// ============================================================
//  USER SELECTION
// ============================================================
function selectUser(name) {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('password-screen').classList.remove('hidden');
  
  const greetingEl = document.getElementById('personalized-greeting');
  if (name === 'Anusha') {
    greetingEl.textContent = 'Uff Anu is mote chutad ki Love of my life, Babedii, Hathi, Padunia, Moti, Chumeshwari… my biwi Chaudhary ❤️😂 Chalo guess the password';
  } else if (name === 'Karan') {
    greetingEl.textContent = 'Hello Karan';
  }
}

