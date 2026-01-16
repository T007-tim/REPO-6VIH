classbox.js
import java.util.*;
import java.util.stream.*;

public class StreamExample {
    public static void main(String[] args) {

        List<String> names = Arrays.asList("Timothy", "Lucien", "Boboo", "Jayril");

        List<String> filteredNames = names.stream()
                .filter(name -> name.startsWith("A"))
                .map(String::toUpperCase)
                .collect(Collectors.toList());

        System.out.println(filteredNames);
    }
}
