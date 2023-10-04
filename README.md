# Hardware Hustle

Hardware Hustle is a roll-and-write resource management game for one or more players about sustainably running a small hardware business. It's a tabletop game that you print out and play!

**Status:** Open beta testing. Medium, mechanics, and features are set; copy and design can change.

## To play

### Print instructions

1. Download the latest PDFs from [https://oskitone.github.io/hardware_hustle/](https://oskitone.github.io/hardware_hustle/)
2. Print
   - Designs have margins built-in, so print without them
   - Game sheet pages have versions for letter and legal (preferred) paper sizes
   - Rules print in landscape mode, two-sided, flip on short edge
3. Trim game sheets to 8"x6"
4. Rules fold into a booklet

### Playtester feedback welcome!

Form: [https://forms.gle/SubELmMXAjzLFNcR7](https://forms.gle/SubELmMXAjzLFNcR7)

Please only leave feedback if you've played an entire game and can be constructive. If games like this are not for you or you have nothing nice to say, it is better to say nothing at all.

## Source code

Believe it or not, Hardware Hustle is a website that is optimized for print. This repo contains its source code.

To run:

```bash
npm i
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in Chrome. (Note that, despite _kind of_ working, it's not designed to be played on a screen and will have display oddities in non-Chrome browsers.)

If you're on a Mac, to make PDFs:

```bash
./make_pdfs.sh
```

## License

Tentatively `CC BY-SA 4.0` but TBD
