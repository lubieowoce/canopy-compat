package examples;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import examples.canopy.peg.CanopyPEG;
import examples.canopy.peg.Label;
import examples.canopy.peg.ParseError;
import examples.canopy.peg.TreeNode;

class JavaExample {
    public static void main(String[] args) throws IOException {
        try {
            TreeNode tree = CanopyPEG.parse(read("examples/canopy/peg.peg"));

            String name = tree.get(Label.grammar_name).get(Label.object_identifier).text;
            System.out.println("Name: " + name);

            printTree(tree, 0);

        } catch (ParseError ex) {
            System.out.println(ex);
        }
    }

    private static void printTree(TreeNode tree, int indent) {
        String line = "";

        int in = indent;
        while (in-- > 0) line += "    ";

        line += "{" + tree.offset + "}";
        if (tree.elements.isEmpty())
            line += " <" + tree.text + ">";

        System.out.println(line);

        for (TreeNode node : tree)
            printTree(node, indent + 1);
    }

    private static String read(String pathname) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(pathname));

        String content = "", line;
        while ((line = br.readLine()) != null)
            content += line + "\n";

        return content;
    }
}
