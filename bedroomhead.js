  let start = 1
  let x = 1300;
  let y = 630;
  let B = 50;
  let f = -1;
  let f2 = 0;


  let d = 0;
  let c = 0;
  let w = 0;
  let s = 0;

  let cd = 0;
  let wd = 0;
  let sd = 0;

  let dc = 0;
  let wc = 0;
  let sc = 0;

  let dw = 0;
  let cw = 0;
  let sw = 0;

  let ds = 0;
  let cs = 0;
  let ws = 0;


  let dcw = 0;
  let dcs = 0;
  let dsw = 0;
  let dsc = 0;
  let dwc = 0;
  let dws = 0;

  let csd = 0;
  let csw = 0;
  let cds = 0;
  let cdw = 0;
  let cws = 0;
  let cwd = 0;

  let wsc = 0;
  let wsd = 0;
  let wcs = 0;
  let wcd = 0;
  let wds = 0;
  let wdc = 0;

  let sdc = 0;
  let sdw = 0;
  let scd = 0;
  let scw = 0;
  let swd = 0;
  let swc = 0;

  function setup() {
    createCanvas(1680, 931);
    rectMode(CENTER);
    colorMode(HSB);
  }

  function draw() {
    background(40, 16, B + 35);
    noStroke();

    //FIGURES FIGURES FIGURES FIGURES FIGURES FIGURES FIGURES FIGURES FIGURES FIGURUES

    //grey
    fill(0, 0, B);
    rect(1176, 78 / 2, 1008, 78);
    rect(336 / 2, 78 / 2, 336, 78);
    rect(78 / 2, 466 / 2, 78, 466);
    rect(1641, 931 / 2, 78, 931);
    rect(78 / 2, 814, 78, 233);
    rect(1008 / 2, 892, 1008, 78);
    rect(1512, 892, 336, 78);

    //closet back wall
    rect(39 / 4, 582.5, 39 / 2, 233);
    //door
    fill(40, 50, B);
    rect(504, 39 / 2, 336, 39);
    //window
    fill(220, 25, B + 25);
    rect(1176, 921, 336, 39 / 2);

    // bed
    fill(0, 100, B + 50);
    rect(1308, 466, 588, 378);
    //pillows
    fill(0, 0, B + 50);
    rect(1550, 375, 90, 160);
    rect(1550, 555, 90, 160);

    //lamp
    fill(45, 50, B + 50);
    ellipse(1552, 117, 78);

    //rug
    fill(124, 100, B + 10);
    rect(553.5, 466, 707, 532, 50);
    fill(0, 100, B + 10);
    rect(553.5, 466, 558.56, 420, 70);
    fill(124, 100, B + 10);
    rect(553.5, 466, 512.34, 378, 50);

    //dresser
    fill(30, 77.7, B + 27.7);
    rect(987.5, 105, 375, 54);

    //desk
    fill(210, 70, B + 20);
    rect(1350, 117, 300, 78);
    //chair
    fill(0, 0, B - 50);
    rect(1350, 205, 78, 78, 20);
    //computer
    fill(0, 0, B - 20);
    rect(1350, 99, 120, 18);
    rect(1350, 135, 80, 25);

    //bed stand
    fill(270, 80, B + 27.7);
    rect(1551, 707, 99, 99);
    fill(0, 0, 0);
    rect(1579, 690, 20, 37);

    //bookshelf
    fill(40, 50, B);
    rect(349, 826, 522, 54);

    //statue
    fill(0, 0, B + 50);
    rect(210, 210, 242, 242, 96);


    if (start == 1) {
      fill(0, 0, 0);
      rect(width / 2 + 38, height / 2 + 85, 820, 370);
      textSize(100);
      stroke(7);
      fill(0, 0, 100);
      text('BEDROOMHEAD', width / 2 - 360, height / 2);
      textSize(42);
      text('HOLD SPACEBAR TO INTERACT', width / 2 - 305, height / 2 + 77);
      text('ARROW KEYS TO MOVE', width / 2 - 225, height / 2 + 150);
      textSize(70);
      text('CLICK TO START', width / 2 - 262, height / 2 + 240)
    }

    //movement control
    if (keyIsDown(37)) {
      x -= 10;
    }
    if (keyIsDown(38)) {
      y -= 10;
    }
    if (keyIsDown(39)) {
      x += 10;
    }
    if (keyIsDown(40)) {
      y += 10;
    }


    //LIMITS LIMITS LIMITS LIMITS LIMITS LIMITS LIMITS LIMITS LIMITS LIMITS LIMITS LIMITS


    //wall limits
    if (x <= 78) {
      x = 78;
    }
    if (x >= 1602) {
      x = 1602;
    }
    if (y <= 78) {
      y = 78;
    }
    if (y >= 853) {
      y = 853;
    }

    //statue limits
    if (y <= 319) {
      if (x <= 320) {
        x = 322;
      }
    }
    if (x <= 321) {
      if (y <= 320) {
        y = 322;
      }
    }

    //bookshelf limit
    if (x <= 600) {
      if (y >= 799) {
        y = 798;
      }
    }

    //dresser limit
    if (x <= 1175 && 800 <= x) {
      if (y <= 132) {
        y = 133;
      }
    }

    //comp. desk / lamp limit
    if (1200 <= x) {
      if (y <= 156) {
        y = 156;
      }
    }

    //nightstand limit
    if (277 <= y && y <= 754) {
      if (x >= 1500) {
        x = 1500;
      }
    }

    //Brightness var limits
    if (f2 >= 2) {
      f2 = 1;
    }
    if (f2 <= 0) {
      f2 = 0
    }


    //player character
    if (start == 0) {
      noStroke();
      fill(20, 60, B + 20);
      ellipse(x, y, 78);
    }


//INTERACTIONS INTERACTIONS INTERACTIONS INTERACTIONS INTERACTIONS INTERACTIONS

    //door interaction
    if (372 <= x && x <= 672 && y <= 79) {
      if (keyIsDown(32)) {

        if (c == 0 && w == 0 && s == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('there`s no reason to go out there.', 370, 162);
          d += 1;
          if (d > 1) {
            d = 1;
          }
        }

        if (c == 1 && w == 0 && s == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('I`m really OK with keeping my face to myself today.', 370, 272);
          cd += 1;
          if (cd > 1) {
            cd = 1;
          }
        }

        if (w == 1 && c == 0 && s == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('I wish surviving this could mean overcoming the problem.', 370, 362);
          wd += 1;
          if (wd > 1) {
            wd = 1;
          }
        }

        if (s == 1 && c == 0 && w == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('why leave the domain of self? Outside, power erodes.', 390, 450);
          sd += 1;
          if (sd > 1) {
            sd = 1;
          }
        }

        if (cs == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('why do people sound so far away from me?', 325, 300);
          csd += 1;
          if (csd > 1) {
            csd = 1;
          }
        }

        if (cw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('what connections would surround me on the other side of this door?', 350, 180);
          cwd += 1;
          if (cwd > 1) {
            cwd = 1;
          }
        }

        if (ws == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('there`s so much world I never saw.', 350, 100);
          wsd += 1;
          if (wsd > 1) {
            wsd = 1;
          }
        }

        if (wc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('if I make it out of this, I swear to God I`m testifying before Congress', 350, 140);
          wcd += 1;
          if (wcd > 1) {
            wcd = 1;
          }
        }

        if (sc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('the further I get from this room, the less real it all becomes. I can pretend it all makes sense', 400, 675);
          scd += 1;
          if (scd > 1) {
            scd = 1;
          }
        }

        if (sw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('why am I locked out of the bigger picture?', 735, 210);
          swd += 1;
          if (swd > 1) {
            swd = 1;
          }
        }

        if (csw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('I don`t know how to be real, I don`t know what I feel and what`s just been suggested to me', 535, 240);
        }

        if (cws == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('before I go for lunch, I`m going to find that photo .... when did the sun go down?', 545, 220);
        }

        if (wsc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('if I can`t get out of here... how am I going to survive this?', 100, 720);
        }

        if (wcs == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('the easiest way out of an uneasy feeling is to decide something is untrue.', 120, 700);
        }

        if (scw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('I`ve completely forgotten what`s behind this door. could be anything, really. I`ll choose not to open it, to keep hold of this feeling', 151, 200);
        }

        if (swc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('I want so badly to open the door to the other side, but my mere placement here reveals where it is I am supposed to evolve.', 85, height / 2);
        }
      }
    }

    //comp desk interaction
    if (x >= 1200 && x <= 1500 && y <= 205) {
      if (keyIsDown(32)) {

        if (d == 0 && w == 0 && s == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('these algorithms are so uncreative', 700, 179);
          c += 1;
          if (c > 1) {
            c = 1;
          }
        }

        if (d == 1 && w == 0 && s == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('how did everything get so complicated?', 700, 279);
          dc += 1;
          if (dc > 1) {
            dc = 1;
          }
        }

        if (w == 1 && d == 0 && s == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('the human cost will never really catch their attention.', 700, 379);
          wc += 1;
          if (wc > 1) {
            wc = 1;
          }
        }

        if (s == 1 && w == 0 && d == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('at least, interpretation. at most, pure guesswork.', 475, 179);
          wc += 1;
          if (wc > 1) {
            wc = 1;
          }
        }

        if (ds == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('innumerable identities splintered into thoughtless markings', 312, 205);
          dsc += 1;
          if (dsc > 1) {
            dsc = 1;
          }
        }

        if (dw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('you can never really know.', width / 2, 82);
          dwc += 1;
          if (dwc > 1) {
            dwc = 1;
          }
        }

        if (ws == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('it`s all burning, faster and faster.', 1560, height / 2 + 65);
          wsc += 1;
          if (wsc > 1) {
            wsc = 1;
          }
        }

        if (wd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('it`s not just the weather. People are melting down at the most alarming rate', 707, 303);
          wdc += 1;
          if (wdc > 1) {
            wdc = 1;
          }
        }

        if (sd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('a significant history of lost achievements, no matter how great. Who aspires to Ozymandias?', width / 2, 88);
          sdc += 1;
          if (sdc > 1) {
            sdc = 1;
          }
        }

        if (sw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('subtlety on a tiny scale is control. Control is focus, focus is evolution.', 870, 254);
          swc += 1;
          if (swc > 1) {
            swc = 1;
          }
        }

        if (dsw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('soon we`ll find the more proper way to organize ourselves. You can see the muscle fibres of the cultural organs pulling together', 110, 100);
        }

        if (dws == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('what great emotions scream from behind a collection of masks?', 850, 194);
        }

        if (wsd == 1) {
          ws -= 1;
          if (ws <= 0) {
            w = 0;
          }
          textSize(16);
          fill(0, 0, 0);
          text('I`m glad to know there`s a strong foundation of life on this planet, primed and ready for our sudden disappearance.', 80, height / 2 + 150);
        }

        if (wds == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('if I die here, I`ll just be left in the memory of the aftermath... like all these people were.', 1100, 777);
        }

        if (sdw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('the collective human knowledge project has many instances of force`s abuse, yet we continue to offer blessings for those willing to work for it and a badge.', 53, height / 2 - 7);
        }

        if (swd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('God wouldn`t recognize themself from most angles, inlcuding the text on a screen.', 875, 159);
        }
      }
    }

    //window interaction
    if (x >= 1008 && x <= 1344 && y >= 830) {
      if (keyIsDown(32)) {

        if (d == 0 && c == 0 && s == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('day 3 the neighbors haven`t been on their roof. I hope they`re OK.', 1000, 750);
          w += 1;
          if (w > 1) {
            w = 1;
          }
        }
        if (d == 1 && c == 0 && s == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('there`s always exponentially more to what we know than we know, or we say.', 475, 179);
          dw += 1;
          if (dw > 1) {
            dw = 1;
          }
        }

        if (c == 1 && d == 0 && s == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('how much of the air is filled with invisible signals? what`s it all connected to?', 475, 179);
          cw += 1;
          if (cw > 1) {
            cw = 1;
          }
        }

        if (s == 1 && c == 0 && d == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('subtlety on a grand scale is simply craftsmanship.', 475, 179);
          sw += 1;
          if (sw > 1) {
            sw = 1;
          }
        }

        if (dc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('we all struggle to survive while drowning in abstract excesses.', 650, 450);
          dcw += 1;
          if (dcw > 1) {
            dcw = 1;
          }
        }

        if (ds == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('disagreement is the only fatal plague we face today.', 1560, 800);
          dsw += 1;
          if (dsw > 1) {
            dsw = 1;
          }
        }

        if (cs == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('all I see is motion. Like entertainment without the effort', 405, 900);
          csw += 1;
          if (csw > 1) {
            csw = 1;
          }
        }

        if (cd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('we all completely ignore the fact that we`re being chipped away at.', width / 2 - 45, height / 2);
          cdw += 1;
          if (cdw > 1) {
            cdw = 1;
          }
        }

        if (sd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('structures are erected to limit us. to be within functional management distance of their forceful dispatches.', 660, 590);
          sdw += 1;
          if (sdw > 1) {
            sdw = 1;
          }
        }

        if (sc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('it`s as if, because it all just keeps us going for now, we`ve got it figured out.', 750, 830);
          scw += 1;
          if (scw > 1) {
            scw = 1;
          }
        }

        if (dcs == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('I`ll never be as close to them as I think I should be.', 1300, 510);
        }

        if (dsc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('what good is the outside world with 7 billion projectors running aloud?', 340, 400);
        }

        if (csd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('my slightest reflection reminds me of everything I`m not enough of', 900, 850);
        }

        if (cds == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('at all points, we are one pretty, well-spoken person away from toppling the establishment.', 100, 790);
        }

        if (sdc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('metropolis, a blink away from molten remains of an unseen asteroid collision', 80, 790);
        }

        if (scd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('I honestly agree with very few people in this world about what`s real at all. I suppose the functional necessity is bare-minimal.', 750, 55);
        }
      }
    }

    //statue interaction
    if (x <= 345 && y <= 345) {
      if (keyIsDown(32)) {

        if (d == 0 && c == 0 && w == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('the subtleties of each shift in dimension captures your attention for longer than your eyes linger', 340, 160);
          s += 1;
          if (s > 1) {
            s = 1;
          }
        }

        if (d == 1 && c == 0 && w == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('people are incapable of seeing their own thoughts as of the tapestry of history.', 490, 120);
          ds += 1;
          if (ds > 1) {
            ds = 1;
          }
        }

        if (c == 1 && d == 0 && w == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('why does this look more like sound than a human?', 440, 540);
          cs += 1;
          if (cs > 1) {
            cs = 1;
          }
        }

        if (w == 1 && c == 0 && d == 0) {
          textSize(16);
          fill(0, 0, 0);
          text('every great tribe is born from the ashes of the last.', 475, 680);
          ws += 1;
          if (ws > 1) {
            ws = 1;
          }
        }

        if (dc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('standing right next to someone is looking on from worlds away', 333, 400);
          dcs += 1;
          if (dcs > 1) {
            dcs = 1;
          }
        }

        if (dw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('if discomfort borders on the incommunicable, what great emotions lay silently?', 300, 300);
          dws += 1;
          if (dws > 1) {
            dws = 1;
          }
        }

        if (cd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('a generic face is always an asset for different reasons.', 1166, 800);
          cds += 1;
          if (cds > 1) {
            cds = 1;
          }
        }

        if (cw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('could a photo of this statue on someone`s browser be drawing a digital line from there to here, right in front of me, right now?', 240, 240);
          cws += 1;
          if (cws > 1) {
            cws = 1;
          }
        }

        if (wc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('the powerful have populations to spare in their unit operations.', 1050, 760);
          wcs += 1;
          if (wcs > 1) {
            wcs = 1;
          }
        }

        if (wd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('Hell, this probably wouldn`t even be the 3rd worst storm by the end of my natural lifetime.', 180, 180);
          wds += 1;
          if (wds > 1) {
            wds = 1;
          }
        }

        if (dcw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('the time I`m `failing` to use by being alone reminds me how to spend time well', 200, 200);
        }

        if (dwc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('the reasons I have which I`ll never explain are not lone to me. Every lifetime is beyond both belief and understanding.', 140, 140);
        }

        if (cdw == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('anything to distract us from meaningful creation.', 160, 160);
        }

        if (cwd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('what new connections surround me already? Here I am, connecting to someone`s creation. what does that mean?', 220, 220);
        }

        if (wcd == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('it takes collective ignorance quite some time to brew this big of a storm unprepared for. Open secrets in need of stitching closed.', 120, 120);
        }

        if (wdc == 1) {
          textSize(16);
          fill(0, 0, 0);
          text('health is in heightened fragility, but we refuse to cease emboldening as though our egos are the container of our well-being, and not vice versa.', 100, 100);
        }
      }
    }

    //bookshelf interaction
    if (x <= 600 && y >= 798) {
      if (keyIsDown(32)) {

        textSize(16);
        fill(0, 0, 0);
        text('these books once brought me joy. Now all they stir is unbridled hatred', 250, 753);
      }
    }

    // dresser interaction
    if (x >= 800 && x <= 1175 && y <= 133) {
      if (keyIsDown(32)) {

        textSize(16);
        fill(0, 0, 0);
        text('the dresser smells weird. did you know the dresser smelt weird?', 800, 180);
      }

      if (sdw == 1) {
        textSize(16);
        fill(0, 0, 0);
        text('you`ve had this dresser since you were 6. Remember Chips the Monkey?', 32, height / 2);
      }
    }

    // closet interaction
    if (x <= 79 && y >= 466 && y <= 699) {
      if (keyIsDown(32)) {

        textSize(16);
        fill(0, 0, 0);
        text('it was easier when there was a monster in here', 250, 603);
      }
    }

    //pillow interaction
    if (y >= 275 && x >= 1480 && y <= 655) {
      if (keyIsDown(32)) {

        textSize(16);
        fill(0, 0, 0);
        text('laying in bed is more depressive than relaxing', 1050, 470);
      }

      if (dcw == 1) {
        textSize(16);
        fill(0, 0, 0);
        text('my imagination must be bleeding out', 800, 340);
      }

      if (dws == 1) {
        textSize(16);
        fill(0, 0, 0);
        text('I don`t remember the last time I felt like I was achieving something meaningful. What happened to my dreams?', 707, 235);
      }
    }

    //night stand interaction
    if (y >= 656.5 && x >= 1500 && y <= 757.5) {
      if (keyIsDown(32)) {

        textSize(16);
        fill(0, 0, 0);
        text('is it time to open my time-capsule? may not have ever else', 1075, 540);
      }
    }

    //lamp interactions
    if (f == -1) {
      if (x >= 1502 && y <= 205) {
        if (keyIsDown(32)) {
          textSize(16);
          fill(0, 0, 0);
          text('please stop', 1300, 700);
          let B = 70;
          f += 1;
        }
      }
    }
    if (f == 0) {
      if (x >= 1502 && y <= 205) {
        if (keyIsDown(32)) {
          textSize(16);
          fill(0, 0, 0);
          text('distracting yourself', 1275, 725);
          let B = 50;
          f -= 1;
        }
      }
    }
  }


  function mouseClicked() {
    if (start == 1) {
      start = 0;
    } else {

      let start = 1
      let x = 1300;
      let y = 630;
      let B = 50;
      let f = -1;
      let f2 = 0;


      let d = 0;
      let c = 0;
      let w = 0;
      let s = 0;

      let cd = 0;
      let wd = 0;
      let sd = 0;

      let dc = 0;
      let wc = 0;
      let sc = 0;

      let dw = 0;
      let cw = 0;
      let sw = 0;

      let ds = 0;
      let cs = 0;
      let ws = 0;


      let dcw = 0;
      let dcs = 0;
      let dsw = 0;
      let dsc = 0;
      let dwc = 0;
      let dws = 0;

      let csd = 0;
      let csw = 0;
      let cds = 0;
      let cdw = 0;
      let cws = 0;
      let cwd = 0;

      let wsc = 0;
      let wsd = 0;
      let wcs = 0;
      let wcd = 0;
      let wds = 0;
      let wdc = 0;

      let sdc = 0;
      let sdw = 0;
      let scd = 0;
      let scw = 0;
      let swd = 0;
      let swc = 0;

    }
  }
