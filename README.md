# Hardware Hustle

A pen-and-paper game for 1+ players about sustainably running a small hardware business.

Still very much work-in-progress.

## Print instructions

1. Download PDFs from [https://oskitone.github.io/hardware_hustle/](https://oskitone.github.io/hardware_hustle/)
2. Print
   - Designs have margins built-in, so print without them
   - Game sheet pages have versions for letter and legal (preferred) paper sizes
   - Rules print in landscape mode, two-sided, flip on short edge
3. Trim game sheets to 8"x6"
4. Rules fold into a booklet

## Development

Believe it or not, this game is a website designed for print.

To run it:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in Chrome. (Despite _kind of_ working, this game is not designed to be played on a screen. It will also have display oddities in non-Chrome browsers.)

If you're on a Mac, to make PDFs:

```bash
./make_pdfs.sh
```

## License

Tentatively `CC BY-SA 4.0` but TBD
