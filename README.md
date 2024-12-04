# Steps to create .tar.gz package

Use the script ```build_package.sh``` to create the .tar.gz package.

The version number mentioned in ```package.json``` will be used to name the final package file.
So make sure to update the version if required.

Usage
To run the script, use the following command
```
./build_package.sh [options]
```

Options

`--env <environment>`: Specifies the environment for the build Possible values are dev, staging and prod. Default is prod if not provided.
```bash
./build_package.sh --env dev
```

`--upload-to-server <true|false>`: Determines whether to upload the build to a server. Possible values are true or false. Default is false if not provided.
```bash
./build_package.sh --upload-to-server true
```

Depending on the environment, the file is automatically uploaded to the appropriate server:

For dev or staging its uploaded to - ```digitalhuman.uk/home/assets```

For prod its uploaded to - ```trulience.com/home/assets```
