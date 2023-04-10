require 'yaml'

def excluded_dir?(filename)
  filename == "." || filename == ".."
end

%w(javascript ruby).each do |lang|
  puts "Renaming #{lang} snapshots..."

  Dir.foreach(lang+"/") do |subfolder|
    next if excluded_dir?(subfolder)
    Dir.foreach(lang+"/"+subfolder+"/") do |rulefolder|
      next if excluded_dir?(rulefolder)
      rulefolder_path = lang+"/"+subfolder+"/"+rulefolder
      next if File.file?(rulefolder_path)

      snapshot_folder = rulefolder_path+"/.snapshots"
      Dir.foreach(snapshot_folder) do |snapshot|
        next if excluded_dir?(snapshot)
        new_name = snapshot.split("--")[1]
        raise "Unknown naming format: #{snapshot}" if new_name.nil?

        File.rename(
          [snapshot_folder, snapshot].join("/"),
          [snapshot_folder, snapshot.split("--")[1]].join("/"),
        )
      end
    end
  end
end

puts "Ensure consistent ID format..."
%w(javascript ruby).each do |lang|
    Dir.foreach(lang+"/") do |subfolder|
      next if excluded_dir?(subfolder)
      Dir.foreach(lang+"/"+subfolder+"/") do |rulefolder|
        next if excluded_dir?(rulefolder)
        rulefolder_path = lang+"/"+subfolder+"/"+rulefolder
        next if File.directory?(rulefolder_path)

        # we have a rule YAML file
        rule = YAML.load_file(rulefolder_path)
        id = rule["metadata"]["id"]

        expected_id = [lang, subfolder, rulefolder.gsub(".yml", "")].join("_")
        if id != expected_id
          puts "Inconsistent ID found: #{id}. Updating..."

          rule["metadata"]["id"] = expected_id
          File.open(rulefolder_path, "w") do |f|
            f.write rule.to_yaml
          end
        end
      end
    end
  end

# puts "Adding documentation URL..."
%w(javascript ruby).each do |lang|
  Dir.foreach(lang+"/") do |subfolder|
    next if excluded_dir?(subfolder)
    Dir.foreach(lang+"/"+subfolder+"/") do |rulefolder|
      next if excluded_dir?(rulefolder)
      rulefolder_path = lang+"/"+subfolder+"/"+rulefolder
      next if File.directory?(rulefolder_path)

      # we have a rule YAML file
      rule = YAML.load_file(rulefolder_path)
      File.open(rulefolder_path, "a") do |f|
        f << "  documentation_url: https://docs.bearer.com/reference/rules/" + rule["metadata"]["id"]
        f << "\n"
      end
    end
  end
end