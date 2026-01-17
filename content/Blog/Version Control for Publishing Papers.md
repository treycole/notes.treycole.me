---
created: 2025-05-06T17:06
modified: 2026-01-17T00:17
draft:
---
Journals have recently begun encouraging authors to upload datasets and code with a dedicated Digital Object Identifier (DOI) that is referenced in the paper. For this purpose, I use Zenodo. Zenodo will host up to 50 GB per record, with a maximum of 100 files. Each record gets its own DOI which you can reference in your paper and when submitting to journals. 

I have created a kind of workflow that helps me remain organized, and keep my data version controlled, self contained, and open access. This helps me to refer back to my own work later, and keep a public record of the work I have done. I will outline below my workflow, which still has room for optimization, but works for now. 

### Workflow


1. __Calculations repo__: When I begin a project, I create a Git version controlled folder containing all of the code I write and host this as a repository on GitHub. This will be the _'calculations'_ project folder, and will be what I use to generate the datasets and figures for the paper I am working on. I only track the scripts with Git and upload those to the remote repository. The data itself will be in a separate folder included in the `.gitignore` file.

> [!Hint] Tip
> GitHub only allows files with a maximum size of 100 MB to be uploaded to the remote repository. The repository itself is capped at 5 GB. Uploading and hosting the dataset this way is typically infeasible, which another reason having a separate dedicated location for your dataset (e.g. Zenodo) is beneficial. 

2. __Versioning__: Once the project has concluded, and the paper is finished and ready for publication, I will clean up any junk files in the calculations repository and mark it as `v1` in the GitHub tags. This will create a static version of the project which corresponds to the version of the paper it is used for. If further calculations are needed, then the project may evolve and become `v2` and so on. 

3. __Zenodo__: The data folder will then be zipped and uploaded as an entry on Zenodo. The version of the Zenodo entry should correspond to the version of the _calculations_ repository. There is an option in the Zenodo upload to link a GitHub repository, I will link the calculations repository here. There is also an option to include supplementary software, here I will link the specific version of the calculations repo corresponding to the entry. 

4. __Linking Zenodo entry__: Now that the Zenodo entry is created, you will receive a DOI linking to the dataset. I will add this link to the _calculations_ repository README file. This will create a version of the project that diverges from the `v1` that we created earlier. So when on the Zenodo entry, clicking the supplementary software link will take you to `v1` and the README file won't be there.  

5. __Paper repo__: Next, I create a separate GitHub repository for the paper itself. Here, I upload the LaTeX source code, the pdf of the paper, citation information. I will create a _submodule_ of the calculations project inside the paper repo. The submodule exists independently, and is tracked as a separate Git folder. The folder acts as a kind of link to the calculations repository. The changes to the calculations project can be pulled into the paper repo as needed. 

If the project is modified for a new version of the paper, steps 2-4 should be repeated for `v2`. In the paper repo, a new latex source for the `v2` paper should be added, and the submodule changes should be pulled in.

