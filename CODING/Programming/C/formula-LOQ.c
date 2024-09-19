#include <stdio.h>

int main() {
    // check prime number
    int n, isPrime = 1;
    printf("Enter your number: ");
    scanf("%d", &n);

    for (int i = 2; i < n; i++) {
        if (n % i == 0) {
            printf("Number %d is divisible by %d\n", n, i);
            isPrime = 0;
            break; // If we find a divisor, we can break the loop
        }
    }

    if (isPrime && n > 1) {
        printf("Number %d is a prime number.\n", n);
    } else if (n != 1) {
        printf("Number %d is not a prime number.\n", n);
    }

    return 0;
}
