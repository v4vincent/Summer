public class Pyramid {
    public static void main(String[] args) {

        func(4);

    }

    public static void func(int size){

        for (int i = 0; i < size; i++) {
            String asterisk = "";

            for (int j = 0; j < i + 1; j++) {
                asterisk += "*";
            }
            System.out.println(asterisk);
        }


    }
}
