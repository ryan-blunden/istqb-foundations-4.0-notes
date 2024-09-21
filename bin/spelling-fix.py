import sys
import re


def apply_spell_fix(file_path, incorrect_word, correct_word):
    # Read the file
    try:
        with open(file_path, "r") as file:
            content = file.read()
    except FileNotFoundError:
        return False

    # Check if the incorrect word exists in the file
    if incorrect_word in content:
        # Replace all occurrences of the incorrect word with the correct one
        updated_content = content.replace(incorrect_word, correct_word)

        # Write the updated content back to the file
        with open(file_path, "w") as file:
            file.write(updated_content)

        return True
    return False


def process_cspell_output():
    # Regular expression to match the output line format
    pattern = re.compile(
        r"(?P<file_path>[^:]+):(?P<line_number>\d+):(?P<start_pos>\d+) - Unknown word \((?P<incorrect_word>\w+)\) fix: \((?P<correct_word>\w+)\)"
    )

    updated_files = set()

    for line in sys.stdin:
        # Strip the newline characters from input line
        line = line.strip()

        # Match the cspell output format
        match = pattern.match(line)
        if match:
            file_path = match.group("file_path")
            incorrect_word = match.group("incorrect_word")
            correct_word = match.group("correct_word")

            # Apply the spell fix
            if apply_spell_fix(file_path, incorrect_word, correct_word):
                updated_files.add(file_path)

    # Print the updated files
    for updated_file in updated_files:
        print(f"Updated file: {updated_file}")


if __name__ == "__main__":
    process_cspell_output()
