const jobs = [
    process.env['PLD'], //   \:pld:
    process.env['WAR'], //   \:war:
    process.env['DRK'], //   \:drk:
    process.env['GNB'], //   \:gnb:

    process.env['WHM'], //   \:whm:
    process.env['SCH'], //   \:sch:
    process.env['AST'], //   \:ast:
    process.env['SGE'], //   \:sge:

    process.env['MNK'], //   \:mnk:
    process.env['DRG'], //   \:drg:
    process.env['NIN'], //   \:nin:
    process.env['SAM'], //   \:sam:
    process.env['RPR'], //   \:rpr:

    process.env['BRD'], //   \:brd:
    process.env['MCH'], //   \:mch:
    process.env['DNC'], //   \:dnc:

    process.env['BLM'], //   \:blm:
    process.env['SMN'], //   \:smn:
    process.env['RDM'], //   \:rdm:
]

export function getRandomJob() {
    var job = jobs[Math.floor(Math.random() * jobs.length)];
    console.log(job);
    return job;
}
