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
const PASSWORD = "kanda";
let currentUser = "";

function selectUser(name) {
  currentUser = name;
  goToScreen('screen-password');
  
  const greetingEl = document.getElementById('personalized-greeting');
  if (name === 'Anusha') {
    greetingEl.innerHTML = 'Ufff… Anu is here. ❤️<br>The love of my life, my Babedii, Hathi, Padunia, Moti, Chumeshwari… and of course, <strong>meri biwi Chaudhary</strong> 😏😂❤️<br><br>Since you’ve finally arrived in our little world…<br>there’s only one thing left to do—<br><br><strong>Come on, baby… let’s see if you still remember our secret. 👀❤️</strong><br><br>Guess the password. 😏🔐';
  } else if (name === 'Karan') {
    greetingEl.textContent = 'Hello Karan. You know the secret.';
  }
}

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");

  if (input === PASSWORD) {
    errorMsg.classList.remove("show");
    // Unlock transition
    document.getElementById("screen-password").classList.remove("active");
    setTimeout(() => {
        document.getElementById("screen-password").classList.add("hidden");
        document.getElementById("main-experience").classList.remove("hidden");
        window.scrollTo(0, 0);
        initMainExperience();
    }, 1000);
  } else {
    errorMsg.classList.add("show");
    document.getElementById("password-input").value = "";
    document.getElementById("password-input").focus();
  }
}

// Allow pressing Enter key on the password input
const pwInput = document.getElementById("password-input");
if(pwInput) {
  pwInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") checkPassword();
  });
}

// ============================================================
//  NAVIGATION & SCROLLING
// ============================================================
function goToScreen(screenId) {
    const screens = document.querySelectorAll('.fullscreen-section');
    screens.forEach(s => {
        if(s.id === screenId) {
            s.classList.remove('hidden');
            setTimeout(() => s.classList.add('active'), 50);
        } else {
            s.classList.remove('active');
            setTimeout(() => s.classList.add('hidden'), 1000);
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function startAgain() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        document.getElementById("main-experience").classList.add("hidden");
        document.getElementById("password-input").value = "";
        document.getElementById("error-msg").classList.remove("show");
        goToScreen('screen-intro');
    }, 500);
}

// ============================================================
//  CINEMATIC GALLERY
// ============================================================
let currentIndex = 0;

function loadPhoto(index) {
  const img     = document.getElementById("gallery-main-img");
  const caption = document.getElementById("gallery-caption");
  const counter = document.getElementById("gallery-counter");

  if(!img) return;

  img.classList.add("fade");

  setTimeout(() => {
    img.src = photos[index].src;
    caption.textContent = photos[index].caption || "";
    counter.textContent = "Memory #" + (index + 1);

    img.onload = () => img.classList.remove("fade");
    if (img.complete) img.classList.remove("fade");
    
    const nextIdx = (index + 1) % photos.length;
    const preload = new Image();
    preload.src = photos[nextIdx].src;
  }, 400);
}

function nextPhoto() {
  if(!photos || photos.length === 0) return;
  currentIndex = (currentIndex + 1) % photos.length;
  loadPhoto(currentIndex);
}

function prevPhoto() {
  if(!photos || photos.length === 0) return;
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  loadPhoto(currentIndex);
}

// Keyboard arrow navigation
document.addEventListener("keydown", function (e) {
  const mainVisible = !document.getElementById("main-experience").classList.contains("hidden");
  if (!mainVisible) return;
  
  const gallery = document.getElementById("screen-gallery");
  if(!gallery) return;
  
  const rect = gallery.getBoundingClientRect();
  if(rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft")  prevPhoto();
  }
});

// Touch/swipe support
let touchStartX = 0;
const galleryViewer = document.querySelector(".gallery-viewer");
if(galleryViewer) {
    galleryViewer.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    galleryViewer.addEventListener("touchend", function (e) {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextPhoto();
        else          prevPhoto();
      }
    }, { passive: true });
}

// ============================================================
//  ANIMATIONS & OBSERVERS
// ============================================================
let typewriterDone = false;

function initMainExperience() {
    loadPhoto(0);
    
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if(entry.target.id === 'screen-letter' && !typewriterDone) {
                    typewriterDone = true;
                    typeWriterEffect();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    const letterSection = document.getElementById('screen-letter');
    if(letterSection) observer.observe(letterSection);
}

// Typewriter
const letterText = "You know what's funny?\n\nOut of all the people in this huge world,\nsomehow I found you.\n\nAnd somehow,\nyou became my favourite person.\n\nMy favourite notification.\nMy favourite conversation.\nMy favourite smile.\nMy favourite headache.\nMy favourite everything.\n\nI don't know what the future looks like.\n\nBut if I get to keep annoying you,\nlaughing with you,\nfighting with you,\nmaking up with you,\nand creating memories with you...\n\nI think I'll be okay.\n\nBecause wherever you are...\n\nthat's where my little world feels right. â¤ï¸";

function typeWriterEffect() {
    const el = document.getElementById('typewriter-text');
    if(!el) return;
    el.textContent = "";
    let i = 0;
    const speed = 40;
    
    function type() {
        if (i < letterText.length) {
            el.textContent += letterText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    setTimeout(type, 500);
}

// ============================================================
//  MUSIC PLAYER & PARTICLES
// ============================================================
let currentPlaying = null; // 'genz', 'millennial', 'haha'

function toggleMusic(type) {
    const audioGenz = document.getElementById("audio-genz");
    const audioMillennial = document.getElementById("audio-millennial");
    const audioHaha = document.getElementById("audio-haha");
    
    const textGenz = document.getElementById("text-genz");
    const textMillennial = document.getElementById("text-millennial");
    const textHaha = document.getElementById("text-haha");
    
    // reset all texts
    textGenz.textContent = "Play GenZ Song";
    textMillennial.textContent = "Play Millennial Song";
    textHaha.textContent = "Play HAHA MY SONG";

    if (currentPlaying === type) {
        // Stop the currently playing one
        if(type === 'genz') audioGenz.pause();
        if(type === 'millennial') audioMillennial.pause();
        if(type === 'haha') audioHaha.pause();
        currentPlaying = null;
    } else {
        // Pause all first
        audioGenz.pause();
        audioMillennial.pause();
        audioHaha.pause();
        
        // Play the selected one
        if (type === 'genz') {
            audioGenz.play().catch(e => console.log("Play failed", e));
            textGenz.textContent = "Playing GenZ... ❤️";
        } else if (type === 'millennial') {
            audioMillennial.play().catch(e => console.log("Play failed", e));
            textMillennial.textContent = "Playing Millennial... ❤️";
        } else if (type === 'haha') {
            audioHaha.play().catch(e => console.log("Play failed", e));
            textHaha.textContent = "Playing HAHA... ❤️";
        }
        currentPlaying = type;
    }
}

function createParticles() {
    const container = document.getElementById('particles-bg');
    if(!container) return;
    
    const count = 30;
    for(let i=0; i<count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        const size = Math.random() * 8 + 3;
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 20;
        
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = left + '%';
        p.style.animationDuration = duration + 's';
        p.style.animationDelay = delay + 's';
        
        container.appendChild(p);
    }
}
document.addEventListener("DOMContentLoaded", createParticles);

