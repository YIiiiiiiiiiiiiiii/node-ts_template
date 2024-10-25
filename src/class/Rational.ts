/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    getNumerator(): number {
        return this.numerator;
    }

    getDenominator(): number {
        return this.denominator;
    }

    normalize(): Rational {
        const gcd = this.gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    isWhole(): boolean {
        return this.numerator % this.denominator === 0;
    }

    isDecimal(): boolean {
        return this.numerator % this.denominator !== 0;
    }

    equals(numerator: number, denominator: number): boolean;
    equals(r: Rational): boolean;
    equals(arg1: number | Rational, arg2?: number): boolean {
        if (arg1 instanceof Rational) {
            const normalizedThis = this.normalize();
            const normalizedArg = arg1.normalize();
            return normalizedThis.numerator === normalizedArg.numerator &&
                   normalizedThis.denominator === normalizedArg.denominator;
        } else {
            const normalizedThis = this.normalize();
            const normalizedArg = new Rational(arg1, arg2!).normalize();
            return normalizedThis.numerator === normalizedArg.numerator &&
                   normalizedThis.denominator === normalizedArg.denominator;
        }
    }

    static _parseRational(numeratorChars: string[], denominatorChars: string[]): Rational {
        const numerator = parseInt(numeratorChars.join(''));
        const denominator = parseInt(denominatorChars.join(''));
        return new Rational(numerator, denominator);
    }

    static parseRational(str: string): Rational {
        const parts = str.split('/');
        const numerator = parseInt(parts[0]);
        const denominator = parseInt(parts[1]);
        return new Rational(numerator, denominator);
    }

    private gcd(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }
}

