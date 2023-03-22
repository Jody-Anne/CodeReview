/**
 * This program demonstrates the use of recursion to reverse a string and calculate the Fibonacci series.
 */
public class RecursionDemo {
 
    public static void main(String[] args) {
 
        // Saves the string that would be reversed
        String inputStr = "Java is awesome";
 
        // Call the reverseString method and print the result
        String reversedStr = reverseString(inputStr);
        System.out.println("The reversed string is: " + reversedStr);
 
        // Call the fibonacciSeries method and print the result
        int numElements = 10;
        System.out.print("Fibonacci Series of " + numElements + " numbers:");
        for (int i = 0; i < numElements; i++) {
            System.out.print(fibonacciSeries(i) + " ");
        }
    }
 
    /**
     * This method takes a string parameter and recursively reverses the string.
     *
     * @param inputStr the string to be reversed
     * @return the reversed string
     */
    public static String reverseString(String inputStr) {
        if (inputStr.isEmpty()) {
            return inputStr;
        }
        return reverseString(inputStr.substring(1)) + inputStr.charAt(0);
    }
 
    /**
     * This method calculates the n-th number in the Fibonacci series.
     *
     * @param n the index of the number to be calculated
     * @return the n-th number in the Fibonacci series
     */
    public static int fibonacciSeries(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
    }
}
